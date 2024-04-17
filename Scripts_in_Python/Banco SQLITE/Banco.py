import sqlite3

banco = sqlite3.connect('produto275.db') # coloca o nome do banco de dados

# a variavel vai receber a conecao com o banco de dados que a gente vai criar

# procurar o sqlite db no google

cursor = banco.cursor()

#cursor.execute("CREATE TABLE produtos (nome text, qtd integer, preco float)")
#cursor.execute("CREATE TABLE produtos ('fone', 12, 350.00)")
#cursor.execute("CREATE TABLE produtos (monitor, 10, 1150.00)")

banco.commit()
cursor.execute("INSERT INTO produtos VALUES ('Notebook','3','4500')")
