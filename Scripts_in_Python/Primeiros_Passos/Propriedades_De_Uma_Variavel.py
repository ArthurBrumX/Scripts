# Script Que Leia Um Dado Informado Pelo Usuáio;
# Armazene Na Variável E Retorne na tela o Seu Tipo Primitivo; 
# E Todas As Informações Possíveis Sobre Ela.

print("============================================")

print ("Conhecendo As Propriedades De Uma Variável!")

print("============================================")

alguma_coisa = (input("Digite Qualquer Coisa: "))

print("===============================================")

print ("O tipo primitivo desse Dado É: ",type(alguma_coisa))
    # .type() -- Informa O Tipo Da Variável

print ("Essa Variável é Constituida Apenas por Espaços? ",alguma_coisa.isspace())
    # .isspace() -- Informa Se a Variável é Constituida De Apenas Espaços!

print ("Essa Variável é Constituida Apenas por Números? ",alguma_coisa.isnumeric())
    # .isnumeric() -- Informa Se a Variável é Constituida De Apenas Caracteres Númericos!

print ("Essa Variável é Constituida Apenas por Caracteres Alfabeticos? ", alguma_coisa.isalpha())
    # .isalpha() -- Informa Se a Variável é Constituida De Apenas Caracteres Alfebetico!

print ("Essa Variável é Constituida Apenas por Caracteres  Alfanumericos? ", alguma_coisa.isalnum())
    # .isalnum() -- Informa Se a Variável é Constituida De Apenas Caracteres Alfanumerico!

print ("Essa Variável é Constituida Apenas por Caracteres Maiúsculas?", alguma_coisa.isupper())
    # .isupper() -- Informa Se a Variável é Constituida De Apenas Caracteres Alfabeticos Maiusculas!

print ("Essa Variável é Constituida Apenas por Caracteres Minúsculas?", alguma_coisa.islower())
    # .islower() -- Informa Se a Variável é Constituida De Apenas Caracteres Alfabeticos Minusculas!

print ("Essa Variável Está Capitalizada?", alguma_coisa.istitle())
    # .istitle() -- Informa Se a Variável é Constituida De Caracteres Alfabeticos Maiusculas e Minusculas!

print("===============================================")

# OBS: Em Python Toda Variável é Um Objeto!