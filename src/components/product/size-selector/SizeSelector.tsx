import type { Size } from "@/interfaces"
import clsx from "clsx"


interface Props
{
  selectorSize?: Size,
  availableSize: Size[],
  onSizeChange: (size: Size) => void
}
export const SizeSelector = ({ selectorSize, availableSize, onSizeChange }: Props) =>
{
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Tallas disponibles</h3>
      <div className="flex">
        {availableSize.map(size => (
          <button onClick={() => onSizeChange(size)} className={
            clsx(
              "mx-2 hover:underline text-lg",
              {
                'underline': size === selectorSize
              }
            )
          } key={size}>
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
