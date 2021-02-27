import EmbeddedContent from '../EmbeddedContent'

export default function Tuber() {
  return (
    <EmbeddedContent
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
      width={850}
      height={478}
      src="https://www.youtube.com/embed/4jUMUcCuMJ4"
    />
  )
}
