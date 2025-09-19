interface EmailTemplateProps {
  content: string
}

export function EmailTemplate({ content }: EmailTemplateProps) {
  return <div>{content}</div>
}
