"use client";

export const ErrorContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="text-red-500 text-center">
      <h2 className="text-xl font-bold mb-2">Erro ao carregar</h2>
      <p>Não foi possível carregar o conteúdo. Tente novamente mais tarde.</p>
    </div>
  </div>
  )
}
