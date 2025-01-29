import { Camera } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  onComplete?: () => void;
}

export function VideoPlayer({ videoUrl, onComplete }: VideoPlayerProps) {
  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black mb-6">
      <video
        src={videoUrl}
        controls
        className="w-full h-full"
        onEnded={onComplete}
      />
    </div>
  );
}

interface VideoRecorderProps {
  recordedVideo: string | null;
  onOpenCamera: () => void;
}

export function VideoRecorder({ recordedVideo, onOpenCamera }: VideoRecorderProps) {
  return (
    <div className="space-y-4">
      {recordedVideo ? (
        <div className="aspect-video rounded-lg overflow-hidden bg-black">
          <video src={recordedVideo} controls className="w-full h-full" />
        </div>
      ) : (
        <button
          onClick={onOpenCamera}
          className="w-full aspect-video flex flex-col items-center justify-center gap-4
                   bg-gray-50 dark:bg-gray-700/50 rounded-lg border-2 border-dashed
                   border-gray-200 dark:border-gray-600 hover:border-cyan-500
                   dark:hover:border-cyan-500 transition-colors duration-200"
        >
          <Camera className="w-12 h-12 text-gray-400" />
          <span className="text-gray-500 dark:text-gray-400">
            Clique para gravar sua resposta
          </span>
        </button>
      )}
    </div>
  );
}
