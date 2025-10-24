function status(request, response) {
  // não define o chacacter set - chareset
  // response.status(200).send('alunos do curso.dev Jeová')

  // define o character set utf-8
  response.status(200).json({ chave: 'jeová' })
}

export default status
