export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f7efe5",
      padding: "60px 20px",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "white",
        borderRadius: "20px",
        padding: "40px",
        boxShadow: "0 0 20px rgba(0,0,0,0.08)"
      }}>
        
        <h1 style={{
          fontSize: "48px",
          color: "#8c6a43",
          marginBottom: "20px",
          textAlign: "center"
        }}>
          Instituto Kamilah Franco
        </h1>

        <p style={{
          fontSize: "20px",
          lineHeight: "1.8",
          color: "#444",
          textAlign: "center"
        }}>
          Um espaço de acolhimento, expansão emocional,
          desenvolvimento feminino e transformação interior.
        </p>

        <div style={{
          marginTop: "50px",
          display: "grid",
          gap: "20px"
        }}>
          
          <div style={{
            background: "#f9f4ee",
            padding: "25px",
            borderRadius: "16px"
          }}>
            <h2>Atendimentos Terapêuticos</h2>
            <p>
              Sessões voltadas para desbloqueios emocionais,
              autoestima, autossabotagem, merecimento e expansão pessoal.
            </p>
          </div>

          <div style={{
            background: "#f9f4ee",
            padding: "25px",
            borderRadius: "16px"
          }}>
            <h2>Barras de Access</h2>
            <p>
              Técnica energética que auxilia no alívio mental,
              emocional e na liberação de padrões limitantes.
            </p>
          </div>

          <div style={{
            background: "#f9f4ee",
            padding: "25px",
            borderRadius: "16px"
          }}>
            <h2>Desenvolvimento Feminino</h2>
            <p>
              Processos de fortalecimento emocional,
              reconexão pessoal e expansão da consciência feminina.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
