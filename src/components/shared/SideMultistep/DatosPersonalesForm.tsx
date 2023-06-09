import { SideMultistepComponentProps as Props } from '../../../pages'

const DatosPersonalesForm = ({
  isLast,
  stepper,
  next,
  back,
  submit
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {/* <Input label="Nombre" />
      <Input label="Nombre" />
      <Input label="Nombre" />
      <Input label="Nombre" /> */}

      {stepper === 0 && (
        <button
          onClick={next}
          className="self-end btn btn-solid-primary md:w-max"
        >
          Siguiente
        </button>
      )}

      {stepper > 0 && (
        <div className="flex items-center justify-between">
          <button
            onClick={back}
            className="self-end btn btn-outline-primary md:w-max"
          >
            Regresar
          </button>
          <button
            onClick={isLast ? submit : next}
            className="self-end btn btn-solid-primary md:w-max"
          >
            {isLast ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>
      )}
    </div>
  )
}

export default DatosPersonalesForm
