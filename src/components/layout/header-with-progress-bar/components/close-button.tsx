import { CircleX } from "lucide-react"

export const CloseButton = ({
  onClose
}: { onClose: () => void}) => {
  return (
    <button onClick={onClose}>
      <CircleX size={32} className="text-gray-500 cursor-pointer hover:text-red-500 transition-colors duration-900 ease-out" />
    </button>
  )
}
