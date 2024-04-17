# Manipulando Textos

    # 1° Fatiamento De Caracteres

        # Fatiamento Se Resume Em Pegar Pedaços De Uma Determinada Frase.

        # Toda Contagem De Strings Sempre Começa com (0) - Zero

    # -----------------------------------------------------------------------------------

    # Frase = Esta Chovendo Muito = 18 caracter

        # Exemplos De Fatiamento De Strings

            # Fatiamento: Frase [9] = (Vai mostras apenas o caracter 9)

                # Resposta: e

                # Ex: print (frase[9])
            
                # O Primero Número Mostra Qual o Valor Alfabetico Daquele Espaço.

            # Fatiamento: Frase[5:19] - 

                # Vai Mostras Apenas do espaço 9 até o 18.

                # Resposta: Chovendo Muito.

                # O Primeiro Sempre Vai Ser Exato, Porém o Ultimo Será Um Pra Trás.

                # O Ultimo é Sempre Um a Menos.

            # Fatiamento: Frase[5:19:2]

                # Vai Mostra Apartir Do Espaço 5 e Vai Até o Espaço 18 Pulando De 2 Em 2

                # Resposta: coed ut

                # O Primeiro Mostra Qual A partir de Qual Espaço Ele Ira Mostrar.

                # O segundo Vai Dizer Até Onde Ele Vai Contar (Sendo Sempre Um a Menos).

                # O Terceiro Vai Dizer o Quanto Ele Quer Que Pule.

        # Analise De Frase

            # Comandos

                # len(frase)
             
                    # Vai mostra o Número De Caracteres Que a Variável Possui

                    # Resposta = 18 Caracters

                # frase.count('o')

                    # Solicita pro programa contar Quantas Vezes Apareceu a letra (o)

                    # Resposta = 2

                # frase.find('ndo')

                    # find = encontrar

                    # Solicita ao programa para dizer em que momento começou o 'ndo' que ele e encontrou no programa

                    # le apenas uma palavra

                    # Resposta: 10, 11, 12

                # frase.find('android')

                    # Resposta: Retorna o valor -1 pois esse valor n existe dentro da variavel

                # 'chovendo' in frase - (nome da variavel)

                    # Resposta: True

                    # Dentro Da Variavel (frase) existe o conteudo (Chovendo)

        # Transformacao De Strings

            # frase.replace ('muito' , 'Pouco')

                # replace = trocar / reposicionar

                # Solicita Que troque a sting 'muito' por 'pouco'

            # frase.upper()

                # Transforma a string toda em maiuscula

                # Resposta: ESTA CHOVENDO MUITO

            # frase.lower()

                # Transforma a string toda para minuscula
                # Resposta: esta chovendo muito

            # frase.capitalize()

                # vai transforma todas os caracteres em minusculo, menos a primeira letra

                # Resposta: Esta chuvendo muito

            # frase.title()

                # Vai analisar quantas palavras tem na strings

                # Resposta: 3 palavras

            # frase.strip()

                # Vai remover Todos os espacos inuteis no comeco e no fim das strings

                # frase.rstrip()
                    # Vai eliminar os espacos vazios da direita

                # frase.lstrip()
                    # Vai Eliminar Os Espacos Vazios Da Esquerda()

            # Frase.split() - Dvisão

                # Gera Uma Lista Com Todas as cadeias de caracteres

                # irá colocar numa lista os nomes inteiros

                # Divide a frase a cada espaço dado

            # '-'.join(frase) - Juncao

                # Vai Juntar a frase

                # Resposta: Esta-chovendo-muito

            

            

