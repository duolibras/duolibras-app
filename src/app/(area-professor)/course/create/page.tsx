"use client"

import React, { useState } from 'react';
import { ArrowLeft, Upload, DollarSign, FileVideo, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from 'next/image';
import { useNavigation } from '@/hooks/use-navigation';

const PaidCourseCreation = () => {
  const navigation = useNavigation();
  const [previewImage, setPreviewImage] = useState(null);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    price: '',
    installments: '1',
    isDraft: false,
    banner: null,
    previewVideo: null,
    paymentType: 'fixed'
  });

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setCourseData(prev => ({ ...prev, banner: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setCourseData(prev => ({ ...prev, previewVideo: file }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Dados do curso:', courseData);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <header className="bg-white dark:bg-muted-dark border-b border-border-light dark:border-border-dark p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <Button variant="primary" className="mr-4" onClick={() => navigation.goBack()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-text-light dark:text-text-dark">
            Criar Curso Pago
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Stripe Alert */}
          <Alert className="bg-cyan-500 text-white border-none">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Seus dados bancários estão configurados com o Stripe. Você receberá os pagamentos em até 7 dias úteis após a venda.
            </AlertDescription>
          </Alert>

          {/* Banner Upload */}
          <div className="space-y-4">
            <Label>Banner do Curso (Opcional)</Label>
            <div className="relative">
              {previewImage ? (
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
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
                      Clique para fazer upload do banner
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

          {/* Course Details */}
          <div className="space-y-4">
            <div>
              <Input
                label="Nome do curso *"
                id="title"
                required
                value={courseData.title}
                onChange={(e) => setCourseData(prev => ({ ...prev, title: e.target.value }))}
                className="mt-1 w-full py-2 rounded-sm"
              />
            </div>

            <div>
              <Label htmlFor="description">Descrição *</Label>
              <Textarea
                id="description"
                required
                value={courseData.description}
                onChange={(e) => setCourseData(prev => ({ ...prev, description: e.target.value }))}
                className="mt-1 h-32"
              />
            </div>

            {/* Preview Video Upload */}
            <div>
              <Label>Vídeo de Preview *</Label>
              <div className="mt-1">
                <label className="flex items-center justify-center px-6 py-4 border-2 border-dashed border-border-light dark:border-border-dark rounded-lg cursor-pointer hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors">
                  <FileVideo className="h-6 w-6 text-secondary-light dark:text-secondary-dark mr-2" />
                  <span className="text-secondary-light dark:text-secondary-dark">
                    {courseData.previewVideo ? courseData.previewVideo.name : 'Selecione um vídeo'}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    required
                  />
                </label>
              </div>
            </div>

            {/* Payment Details Card */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4 text-text-light dark:text-text-dark">
                  Configurações de Pagamento
                </h3>
                
                <div className="space-y-6">
                  {/* Price Type Selection */}
                  <div className="space-y-4">
                    <Label>Tipo de Preço</Label>
                    <RadioGroup
                      value={courseData.paymentType}
                      onValueChange={(value) => setCourseData(prev => ({ ...prev, paymentType: value }))}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fixed" id="fixed" />
                        <Label htmlFor="fixed">Preço Fixo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible">Preço Sugerido (aluno pode pagar mais)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Price Input */}
                  <div>
                    <Label htmlFor="price">
                      {courseData.paymentType === 'fixed' ? 'Preço do Curso *' : 'Preço Sugerido *'}
                    </Label>
                    <div className="relative mt-1">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-light dark:text-secondary-dark" />
                      <Input
                        label=""
                        id="price"
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={courseData.price}
                        onChange={(e) => setCourseData(prev => ({ ...prev, price: e.target.value }))}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Installments */}
                  <div>
                    <Label htmlFor="installments">Parcelamento Máximo</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="relative mt-1">
                            <Input
                              label=""
                              id="installments"
                              type="number"
                              required
                              min="1"
                              max="12"
                              value={courseData.installments}
                              onChange={(e) => setCourseData(prev => ({ ...prev, installments: e.target.value }))}
                            />
                            <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-secondary-light dark:text-secondary-dark" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Número máximo de parcelas permitido para o curso</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Draft Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Salvar como Rascunho</Label>
                <p className="text-sm text-secondary-light dark:text-secondary-dark">
                  O curso não ficará visível na plataforma até ser publicado
                </p>
              </div>
              <Switch
                checked={courseData.isDraft}
                onCheckedChange={(checked) => setCourseData(prev => ({ ...prev, isDraft: checked }))}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-6">
            <Button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-700 text-white w-full sm:w-auto"
            >
              Criar Curso
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PaidCourseCreation;
