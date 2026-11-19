// Bolinha com a primeira letra do nome
// Verde para família e cuidador, amarela para voluntário (igual ao Figma)
const Avatar = ({ nome, voluntario = false }) => {
  return (
    <span className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-full font-bold ${voluntario ? 'bg-amarelo' : 'bg-verde-claro text-verde'}`}>
      {nome[0]}
    </span>
  )
}

export default Avatar
