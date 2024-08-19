interface EmailTemplateProps {
  firstName: string;
  downloadLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  downloadLink,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1 style={{ color: "#333" }}>Hola, {firstName}!</h1>
    <p>
      ¡Gracias por tu interés en nuestro libro! Puedes descargarlo usando el
      enlace a continuación:
    </p>
    <a
      href={downloadLink}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        color: "#fff",
        backgroundColor: "#007BFF",
        textDecoration: "none",
        borderRadius: "5px",
      }}
    >
      Descargar Libro
    </a>
    <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    <p>Saludos,</p>
    <p>El equipo de CodeGame</p>
  </div>
);
