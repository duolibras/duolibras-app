import React, { useRef, useState } from 'react';
import { X, ChevronDown, Camera } from 'lucide-react';

const CameraModal = ({ 
  isOpen, 
  onClose, 
  onRecord 
}: { 
  isOpen: boolean;
  onClose: () => void;
  onRecord: (videoBlob: string) => void;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: BlobPart[] = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        onRecord(URL.createObjectURL(blob));
        stream.getTracks().forEach(track => track.stop());
        onClose();
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Não foi possível acessar sua câmera. Verifique as permissões.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart(clientY);
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const delta = clientY - dragStart;
    if (delta > 0) {
      setTranslateY(delta);
    }
  };

  const handleDragEnd = () => {
    if (translateY > 200) {
      onClose();
    }
    setIsDragging(false);
    setTranslateY(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div
        ref={modalRef}
        className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg
                   transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${translateY}px)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
      >
        <div className="flex justify-center p-2">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-500 text-white
                         hover:bg-red-600 transition-colors duration-200"
              >
                <Camera className="w-5 h-5" />
                Iniciar Gravação
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-500 text-white
                         hover:bg-gray-600 transition-colors duration-200 animate-pulse"
              >
                <div className="w-2 h-2 rounded-full bg-red-500" />
                Parar Gravação
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraModal;
