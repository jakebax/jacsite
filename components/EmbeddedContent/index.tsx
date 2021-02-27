export type EmbeddedContentProps = {
  allow?: string
  allowFullScreen?: boolean
  frameBorder?: string | number
  height: string | number
  style?: Record<string, string | number>
  src: string
  title?: string
  width: string | number
}

export default function EmbeddedContent({
  allow,
  allowFullScreen = false,
  frameBorder = '0',
  height,
  style,
  src,
  title,
  width,
}: EmbeddedContentProps) {
  const afs = allowFullScreen ? { allowFullScreen: true } : {}

  return (
    <iframe
      {...afs}
      allow={allow}
      frameBorder={frameBorder}
      height={height}
      src={src}
      style={style}
      title={title}
      width={width}
    />
  )
}
