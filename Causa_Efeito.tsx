// Ao inves de criar a variavel como consequencia da ação , criar pela causa que ocasionou ela (o efeito que originou ela)

// sempre criar variaveis pela causa que está originando ela, e nao pelo efeito que ela ira provocar no codigo em seguida

function Button() {
  const isFormSubmitting = true;

  return (
    <>
      <button disabled={isFormSubmitting}>
        <span></span>
        {isFormSubmitting ? "Carregando" : "Enviar"}
      </button>
    </>
  );
}
