"use client"

import React, { useState } from 'react';
import { ArrowLeft, Upload, FileVideo, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';

const LessonUpload = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    isDraft: true
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(file);
      // Simulação de upload
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados da aula:', { ...lessonData, video: videoFile });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="bg-white dark:bg-muted-dark border-b border-border-light dark:border-border-dark p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Button variant="primary" className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-semibold text-text-light dark:text-text-dark">
              Adicionar Nova Aula
            </h1>
            <p className="text-sm text-secondary-light dark:text-secondary-dark">
              Curso: Introdução à Libras
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Video Upload Section */}
          <div className="space-y-4">
            <Label>Vídeo da Aula *</Label>
            {!videoFile ? (
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileVideo className="h-12 w-12 text-secondary-light dark:text-secondary-dark mb-2" />
                  <p className="text-sm text-secondary-light dark:text-secondary-dark">
                    Clique para fazer upload do vídeo da aula
                  </p>
                  <p className="text-xs text-secondary-light dark:text-secondary-dark mt-1">
                    MP4, WebM ou Ogg (max. 2GB)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  required
                />
              </label>
            ) : (
              <div className="bg-white dark:bg-muted-dark rounded-lg border border-border-light dark:border-border-dark p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FileVideo className="h-6 w-6 text-cyan-500 mr-2" />
                    <span className="text-text-light dark:text-text-dark">
                      {videoFile.name}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => {
                      setVideoFile(null);
                      setUploadProgress(0);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-sm text-secondary-light dark:text-secondary-dark mt-2">
                  {uploadProgress < 100 
                    ? `Fazendo upload... ${uploadProgress}%`
                    : 'Upload concluído!'}
                </p>
              </div>
            )}
          </div>

          {/* Thumbnail Upload */}
          <div className="space-y-4">
            <Label>Thumbnail da Aula (Opcional)</Label>
            <div className="relative">
              {previewImage ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    width={100}
                    height={60}
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    className="absolute bottom-4 right-4"
                    onClick={() => setPreviewImage(null)}
                  >
                    Alterar Imagem
                  </Button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="h-12 w-12 text-secondary-light dark:text-secondary-dark mb-2" />
                    <p className="text-sm text-secondary-light dark:text-secondary-dark">
                      Clique para fazer upload da thumbnail
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Lesson Details */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Título da Aula *</Label>
              <Input
                label=""
                id="title"
                required
                value={lessonData.title}
                onChange={(e) => setLessonData(prev => ({ ...prev, title: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Descrição da Aula *</Label>
              <Textarea
                id="description"
                required
                value={lessonData.description}
                onChange={(e) => setLessonData(prev => ({ ...prev, description: e.target.value }))}
                className="mt-1 h-32"
              />
            </div>

            {/* Draft Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Salvar como Rascunho</Label>
                <p className="text-sm text-secondary-light dark:text-secondary-dark">
                  A aula não ficará visível até ser publicada
                </p>
              </div>
              <Switch
                checked={lessonData.isDraft}
                onCheckedChange={(checked) => setLessonData(prev => ({ ...prev, isDraft: checked }))}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-700 text-white w-full sm:w-auto"
            >
              Salvar Aula
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LessonUpload;
