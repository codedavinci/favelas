const { writeFileSync } = require("node:fs");

const allOeste = {
  complex: "",
  zone: "oeste",
  data: [
    //Complexo de Camará
    "Estrada do Viegas (Senador Camará) Complexo de Senador Camará",
    "Vila aliança (Senador Camará e Bangu) Complexo de Senador Camará",
    "Coréia (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Mobral (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Chapa Quente (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favelinha do Xuxu (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela Morro do Céu (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela da Torre (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Croacia (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Xuxuzão (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela Cavalo de Aço (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela Rebu (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Carinhoso (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela da Selva (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Beira Rio (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela Annes Dias (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Favela Brasil-Coreia (Morro da Esperança) (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Morro da Titica (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Conjunto João Paulo II (Senador Camará e Santíssimo) Complexo de Senador Camará",
    "Mangueiral (Senador Camará e Bangu) Complexo de Senador Camará",
    "Casinhas (Senador Camará e Bangu) Complexo de Senador Camará",
    "Pantanal (Senador Camará e Bangu) Complexo de Senador Camará",
    "Bairro Araújo (Senador Camará e Bangu) Complexo de Senador Camará",
    "Iraque (Senador Camará e Bangu) Complexo de Senador Camará",
    "Nova Aliança (Senador Camará e Bangu) Complexo de Senador Camará",
    "Beira-Rio (Senador Camará e Bangu) Complexo de Senador Camará",
    "Vacaria (Senador Camará e Bangu) Complexo de Senador Camará",
    "Condomínio Colinas do Retiro (Senador Camará e Bangu) Complexo de Senador Camará",
    "Minha Deusa (Senador Camará e Bangu) Complexo de Senador Camará",
    "Villa Moretti (Senador Camará e Bangu) Complexo de Senador Camará",
    "Favela do Sapo (Senador Camará) Complexo de Senador Camará",
    "Morrinho (Senador Camará) Complexo de Senador Camará",
    "Favela da Pedra/Pedreira (Senador Camará) Complexo de Senador Camará",
    "Morro do Sossego (Senador Camará) Complexo de Senador Camará",

    //Conjunto Nova Cidade"
    "Favela do Barbante (Inhoaíba) Conjunto Nova Cidade",
    "Favela Vila do Céu (Inhoaíba) Conjunto Nova Cidade",
    "Favela Vila União (Inhoaíba) Conjunto Nova Cidade",
    "Favela Vila São Jorge (Inhoaíba) Conjunto Nova Cidade",
    "Favela Vila Boa Esperança (Inhoaíba) Conjunto Nova Cidade",
    "Favela Nova Conquista (Inhoaíba) Conjunto Nova Cidade",
    "Favela Bairro Nova Aguiar (Inhoaíba) Conjunto Nova Cidade",

    //Cidade de Deus
    "Cidade de Deus (Cidade de Deus) Cidade de Deus",

    //Vila Kennedy

    "Metral (Bangu) Vila Kennedy",
    "Malvina (Vila Kennedy e Bangu) Vila Kennedy",
    "Progresso (Vila Kennedy) Vila Kennedy",
    "Manilha (Vila Kennedy) Vila Kennedy",
    "Leão (Vila Kennedy) Vila Kennedy",
    "Quafá (Bangu) Vila Kennedy",
    "Congo (Vila Kennedy) Vila Kennedy",
    "Morrinho (Vila Kennedy) Vila Kennedy",
    "Favela do Jiló e Quiabo (Vila Kennedy) Vila Kennedy",
    "Barrão, Rampa e Pedra (Vila Kennedy) Vila Kennedy",

    "Aço (Santa Cruz)",
    "Favela do Balneário Globo (Sepetiba)",
    "Morro do Banco (Itanhangá)",
    "Morro do Barão (Praça Seca)",
    "Morro da Baronesa (Praça Seca)",
    "Favela da Barreira (Santa Cruz)",
    "Morro do Bateau Mouche (Praça Seca)",
    "Favela Batan (Realengo)",
    "Favela Batanzinho (Realengo)",
    "Favela Beco da Guarda (Sepetiba)",
    "Favela do Beco do Camarão (Santa Cruz)",
    "Favela da Beira do Canal (Vargem Pequena)",
    "Beira-Rio (Recreio dos Bandeirantes)",
    "Cojunto da Beira Rio (Campo Grande)",
    "Morro da Bela Vista (Tanque)",
    "Morro do Birigui (Realengo)",
    "Favela do Bloco 5 (Realengo)",
    "Boca do Rato (Guaratiba)",
    "Favela do Boqueirão (Bangu)",
    "Favela do Bosque dos Pássaros (Campo Grande)",
    "Favela do Bosque Mont Serrat (Vargem Pequena)",
    "Morro do Buraco Quente (Senador Vasconcelos)",
    "COHAB de Realengo (Realengo)",
    "Rua Carumbé (Realengo)",
    "Favela do Cachorro Sentado (Vargem Grande)",
    "Morro da Caixa D'água (Tanque)",
    "Morro do Cambalacho (Itanhangá)",
    "Favela do Caminho do Lúcio (Bangu)",
    "Favela do Caminho do Rio Pequeno (Jacarepaguá)",
    "Favela do Caminho do Urubu (Campo Grande)",
    "Favela do Caminho do Arroio Pavuna (Jacarepaguá)",
    "Canal do Anil (Gardênia Azul)",
    "Canal do Cortado (Recreio)",
    "Morro do Canal (Realengo)",
    "Canecão (Realengo)",
    "Capitão Menezes (Praça Seca)",
    "Capitão Teixeira (Realengo)",
    "Carobinha (Campo Grande)",
    "Cascatinha (Vargem Grande)",
    "Cassiano (Santa Cruz)",
    "Caxangá (Tanque)",
    "Cavalo de Aço (Senador Camará)",
    "César Maia (Vargem Pequena)",
    "Chacrinha (Praça Seca)",
    "Clarim Gorésio (Taquara)",
    "Cohab (Realengo)",
    "Comendador Sofia (Campo Grande)",
    "Comandante Luíz Souto (Tanque)",
    "Coroados (Vargem Pequena)",
    "Cosme e Damião (Realengo)",
    "Covanca (Tanque)",
    "Cobalto (Santa Cruz)",
    "Creche (Jacarepaguá)",
    "Curral das Éguas (Magalhães Bastos)",
    "Da Curva (Vargem Grande)",
    "Divineia ou 31 de Outubro (Paciência)",
    "Dois Irmãos (Jacarepaguá)",
    "Doutor Fernando (Campo Grande)",
    "Entre Rios (Jacarepaguá)",
    "Esperança (Santíssimo)",
    "Espírito Santo (Praça Seca)",
    "Estrada da Curicica (Curicica)",
    "Estrada da Saudade (Bangu)",
    "Estrada do Taquaral (Senador Camará)",
    "Estrada do Catonho (Jardim Sulacap)",
    "Estrada do Quitite (Jacarepaguá)",
    "Estrada Meringuava (Taquara)",
    "Favela da Foice (Pedra de Guaratiba)",
    "Fazenda (Itanhangá)",
    "Fazenda Cassiana (Paciência) - conhecido como Manguariba III",
    "Fazenda Coqueiro (Senador Camará)",
    "Fazenda Mato Alto (Jacarepaguá)",
    "Floresta da Barra (Itanhangá)",
    "Florestal (Realengo)",
    "Fontela (Vargem Pequena)",
    "Frederico Faulhaber (Realengo)",
    "Fumacê (Realengo)",
    "Furnas (Itanhangá)",
    "Gongo (Bangu)",
    "Gouveia (Paciência)",
    "Grota Funda (Guaratiba e Vargem Grande)",
    "Horto Florestal (Santa Cruz)",
    "Hunter Da Peña (Recreio)",
    "Ideal (Realengo)",
    "Isadora (Campo Grande)",
    "Inácio Amaral (Freguesia)",
    "Inácio Dias (Freguesia)",
    "Jacaré (Santíssimo)",
    "Jardim Bangu (Bangu)",
    "Jardim Clarice (Senador Camará)",
    "Jardim da Liberdade (Campo Grande)",
    "Jardim do Amanhã (Jacarepaguá)",
    "Jardim do Carmo (Vila Kosmos)",
    "Jardim do Recreio (Recreio)",
    "Jardim Leal (Santa Cruz)",
    "Jardim Luana (Guaratiba)",
    "Jardim Maravilha (Guaratiba)",
    "Jardim Moriçaba (Senador Vasconcellos)",
    "Jardim Sete de Abril (Paciência)",
    "Jardim São Pedro (Bangu)",
    "Jardim Vila Kosmos (Vila Kosmos)",
    "Jardim Vila São Bento (Bangu)",
    "Joaquim Magalhães (Senador Vasconcelos)",
    "Jordão (Jacarepaguá)",
    "José de Anchieta (Praça Seca)",
    "Junqueira (Paciência)",
    "Juquinha (Santa Cruz)",
    "Ladeira da Reunião (Tanque)",
    "Ladeira do Calharins (Jacarepaguá)",
    "Laranjal (Jacarepaguá)",
    "Larguinho (Realengo)",
    "Favela da Light (Realengo)",
    "Linha de Austin (Paciência)",
    "Lote Mil (Favela do Cerol) (Taquara)",
    "Loteamento São Sebastião (Taquara)",
    "Luanda (Guaratiba)",
    "Luíz Fernando Vitor Filho (Santa Cruz)",
    "Luis Murat (Realengo)",
    "Luís Bom (Campo Grande)",
    "Magarça (Guaratiba)",
    "Mandala (Taquara)",
    "Manuel Nogueira De Sá (Realengo)",
    "Margem do Cação Vermelho (Santa Cruz)",
    "Margem do Canal de São Francisco (Santa Cruz)",
    "Marimbondo (Camorim)",
    "Mato Alto (Praça Seca)",
    "Meringuava (Taquara)",
    "Minha Deusa (Realengo)",
    "Morro da Mina (Campo Grande)",
    "Muzema (Itanhangá)",
    "Nova Aguiar (Campo Grande)",
    "Nova Aurora (Taquara)",
    "Nova Cidade (Campo Grande)",
    "Nova Descoberta (Santa Cruz)",
    "Nova Era (Santa Cruz)",
    "Nova Esperança (Gardênia Azul)",
    "Nova Guaratiba (Guaratiba)",
    "Nova Jérsei (Paciência)",
    "Nova Sepetiba (Sepetiba)",
    "Novo Campinho (Campo Grande)",
    "Novo Horizonte (Campo Grande)",
    "Novo Lar (Vargem Grande)",
    "Novo Palmares (Jacarepaguá)",
    "Oito W (Recreio)",
    "Outeiro (Jacarepaguá)",
    "Paço do Lumiar (Pechincha)",
    "Pantanal (Recreio)",
    "Pantanal (Santa Cruz)",
    "Parque da Esperança (Campo Grande)",
    "Parque Liberal (Padre Miguel)",
    "Paz e Amor (Padre Miguel)",
    "Pedra Branca (Jacarepaguá)",
    "Periquito (Realengo)",
    "Pica Pau (Taquara)",
    "Piraquara (Realengo)",
    "Piraquê (Guaratiba)",
    "Piolho (Tanque)",
    "Pombo Sem Asa (Vargem Grande)",
    "Ponte Preta (Santa Cruz)",
    "Ponte do Rio dos Cachorros (Santíssimo)",
    "Pôr do Sol (Santa Cruz)",
    "Portugal Pequeno (Taquara)",
    "Posse (Campo Grande)",
    "Posto 200 (Realengo)",
    "Praça da Playboy (Jacarepaguá)",
    "Quarenta e Oito (Senador Camará e Bangu)",
    "Renascer (Tanque)",
    "Restinga (Recreio)",
    "Retiro (Senador Camará)",
    "Rebu (Senador Camará)",
    "Reunião (Tanque)",
    "Rio das Pedras (Jacarepaguá)",
    "Rio Bonito (Vargem Grande)",
    "Rio Piraquê (Guaratiba)",
    "Rio Morto (Vargem Grande)",
    "Roberto Moreno (Paciência)",
    "Rollas (Santa Cruz)",
    "Roque Santeiro (Itanhangá)",
    "Samauma (Barra de Guaratiba)",
    "Sangue e Areia (Bangu)",
    "Sapo (Senador Camará)",
    "Sagrado Coração (Santa Cruz)",
    "São Francisco de Assis (Jacarepaguá)",
    "São José Operário (Praça Seca)",
    "São Marcelo (Praça Seca)",
    "São Marciano (Praça Seca)",
    "São Sebastião (Praça Seca)",
    "São Sebastião (Realengo)",
    "São Tilon (Barra da Tijuca)",
    "Santa Anastácia (Curicica)",
    "Santa Catarina (Bangu)",
    "Santa Clara (Taquara)",
    "Santa Luzia (Vargem Pequena)",
    "Santa Maria (Jacarepaguá)",
    "Santo André (Senador Camará)",
    "Santo Antônio (Realengo)",
    "Saquaçu (Paciência)",
    "Sargento Miguel Filho (Bangu)",
    "Sertão (Jacarepaguá)",
    "Sete Sete (Padre Miguel)",
    "Selva (Senador Camará)",
    "Shangrilá (Taquara)",
    "Silvério (Guaratiba)",
    "Sítio do Pai João (Itanhangá)",
    "Sítio Santa Isabel (Pechincha)",
    "Sossego (Senador Camará)",
    "Tancredo Neves (Taquara)",
    "Tancredo Neves (Senador Camará)",
    "Tangará (Jacarepaguá)",
    "Taquaral (Senado Camará)",
    "Teixeira Campos (Santíssimo)",
    "Teixeiras (Jacarepaguá)",
    "Terreirão (Recreio)",
    "Tibaji (Bangu)",
    "Tijuaçu (Itanhangá)",
    "Tijuca (Cosmos)",
    "Tijuquinha (Itanhangá)",
    "Tiquia (Senador Camará)",
    "Tirol (Freguesia)",
    "Travessa Limeira (Praça Seca)",
    "Travessa Antonina (Praça Seca)",
    "Trem (Vila Kosmos)",
    "Três Pontes (Paciência)",
    "Triângulo (Deodoro)",
    "Vale do Ipê (Jacarepaguá)",
    "Vale de Curicica (Curicica)",
    "Vala do Sangue (Santa Cruz)",
    "Vale Encantado (Itanhangá)",
    "Venda da Varanda (Paciência)",
    "Verde é Vida (Senador Camará)",
    "Victor Veiga (Jacarepaguá)",
    "Vila Aliança (Bangu)",
    "Vila Amizade (Vargem Grande)",
    "Vila Autódromo (Jacarepaguá e Barra da Tijuca)",
    "Vila Brasil (Campo Grande)",
    "Vila Brasil (Magalhães Bastos)",
    "Vila Calmete (Curicica)",
    "Vila Camorim (Camorim)",
    "Vila Capelinha (Magalhães Bastos)",
    "Vila Caranguejo (Jacarepaguá)",
    "Vila Catiri (Bangu)",
    "Vila Comari (Campo Grande)",
    "Vila da Paz (Itanhangá)",
    "Vila das Rosas (Realengo)",
    "Vila do Nilo (Realengo)",
    "Vila Darcy Vargas (Taquara e Realengo)",
    "Vila do Almirante (Realengo)",
    "Vila do Céu (Cosmos)",
    "Vila dos Crentes (Vargem Grande)",
    "Vila Esperança/Invasão (Realengo)",
    "Vila Favelão (Jacarepaguá)",
    "Vila Harmonia (Vargem Grande)",
    "Vila Ieda (Campo Grande)",
    "Vila João Lopes (Realengo)",
    "Vila José de Anchieta (Praça Seca)",
    "Vila Juracy (Guaratiba)",
    "Vila Jurema (Realengo)",
    "Vila Kennedy (Bangu)",
    "Vila Maria (Campo Grande)",
    "Vila Mangueiral (Campo Grande)",
    "Vila Nova (Vargem Grande)",
    "Vila Nova Cruzada (Jacarepaguá)",
    "Vila Olímpica (Bangu)",
    "Vila Piquirobi (Bangu)",
    "Vila Pitumbu (Jacarepaguá)",
    "Vila Progresso (Bangu)",
    "Vila Recreio (Recreio)",
    "Vila São Bento (Padre Miguel e Bangu)",
    "Vila Santa Maura (Jacarepaguá)",
    "Vila Santa Mônica (Taquara)",
    "Vila São Miguel (Magalhães Bastos)",
    "Vila Taboinha (Vargem Grande)",
    "Vila União (Realengo)",
    "Vila União da Paz (Bangu)",
    "Vila Verde (Santíssimo)",
    "Vila Vintém (Padre Miguel e Realengo)",
    "Vila Vitória (Cosmos)",
    "Vila Zulmira (Campo Grande)",
    "Virgolândia (Jacarepaguá)",
    "Vista Alegre do Recreio (Recreio)",
  ],
};

const allNorte = {
  complex: "",
  zone: "norte",
  data: [
    // Complexo do Alemão

    "Comunidade da Nova Brasília (Complexo do Alemão) Complexo do Alemão",
    "Comunidade da Fazendinha (Complexo do Alemão) Complexo do Alemão",
    "Morro da Baiana (Complexo do Alemão) Complexo do Alemão",
    "Morro do Adeus (Complexo do Alemão) Complexo do Alemão",
    "Comunidade da Alvorada (Complexo do Alemão) Complexo do Alemão",
    "Comunidade da Grota (Complexo do Alemão) Complexo do Alemão",
    "Reservatório (Complexo do Alemão) Complexo do Alemão",
    "Mineiros (Complexo do Alemão) Complexo do Alemão",
    "Comunidade da Pedra do Sapo (Complexo do Alemão) Complexo do Alemão",
    "Comunidade das Casinhas (Complexo do Alemão) Complexo do Alemão",
    "Canitar (Complexo do Alemão) Complexo do Alemão",
    "Comunidade da Matinha (Complexo do Alemão) Complexo do Alemão",

    //(Maré) Complexo da Maré

    "Morro do Timbau (Maré) Complexo da Maré",
    "Baixa do Sapateiro (Maré) Complexo da Maré",
    "Conjunto Marcílio Dias (Maré e Penha Circular) Complexo da Maré",
    "Parque Maré (Maré) Complexo da Maré",
    "Parque Roquete (Maré) Complexo da Maré",
    "Pinto (Maré) Complexo da Maré",
    "Parque Rubens Vaz (Ramos) Complexo da Maré",
    "Parque União (Bonsucesso) Complexo da Maré",
    "Nova Holanda (Maré e Ramos) Complexo da Maré",
    "Praia de Ramos (Maré e Ramos) Complexo da Maré",
    "Conjunto Esperança (Maré e Manguinhos) Complexo da Maré",
    "Vila do João (Maré e Bonsucesso) Complexo da Maré",
    "Vila do Pinheiro (Maré) Complexo da Maré",
    "Conjunto Bento Ribeiro Dantas (Maré) Complexo da Maré",
    "Nova Maré (Maré) Complexo da Maré",
    "Conjunto Novo Pinheiro - Salsa e Merengue (Maré) Complexo da Maré",
    "Cavalo de Aço (Maré) Complexo da Maré",

    //Complexo de Israel

    "Vigário Geral (Vigário Geral) Complexo da Israel",
    "Parada de Lucas (Parada de Lucas) Complexo da Israel",
    "Zona Sul (Parada de Lucas) Complexo da Israel",
    "Conjunto Cidade Alta (Cordovil) Complexo da Israel",
    "Conjunto Bancários (Vigário Geral) Complexo da Israel",
    "Conjunto Porto Velho (Cordovil) Complexo da Israel",
    "Conjunto Antônio de Salema (Cordovil) Complexo da Israel",
    "Divinéia (Cordovil) Complexo da Israel",
    "Serra Pelada (Cordovil) Complexo da Israel",
    "Avilã (Cordovil) Complexo da Israel",
    "Vila Cambuci (Cordovil) Complexo da Israel",
    "Roraima (Cordovil) Complexo da Israel",
    "Bom Jardim (Cordovil) Complexo da Israel",
    "Morrinho (Cordovil) Complexo da Israel",
    "Favela Pica-Pau (Cachambi) Complexo da Israel",
    "Favela Cinco Bocas (Parada de Lucas) Complexo da Israel",
    "Conjunto Arco-íris (Parada de Lucas) Complexo da Israel",
    "Conjunto Regina (Parada de Lucas) Complexo da Israel",

    // Complexo da Penha

    "Morro do Grotão (Penha) Complexo da Penha",
    "Morro da Chatuba (Penha) Complexo da Penha",
    "Morro da Fé (Penha) Complexo da Penha",
    "Morro da Caixa D'Água (Penha) Complexo da Penha",
    "Morro do Sereno (Penha Circular) Complexo da Penha ",
    "Morro do Caracol (Penha) Complexo da Penha",
    "Vila Cruzeiro (Penha) Complexo da Penha",
    "Ordem e Progresso (Penha) Complexo da Penha",
    "Merendiba (Penha) Complexo da Penha",
    "Morro da Penha (Penha) Complexo da Penha",
    "Parque Proletário (Penha Circular) Complexo da Penha",
    "4 Bicas (Penha) Complexo da Penha",
    "Favela da Cascatinha (Penha) Complexo da Penha",
    "Sem Terra ( Vila da Penha) Complexo da Penha",
    "Palestina (Penha) Complexo da Penha",

    // Chapadão

    "Gogó da Ema (Guadalupe) Complexo da Chapadão",
    "Criança Esperança (Guadalupe e Anchieta) Complexo da Chapadão",
    "Cavaleiro (Ricardo de Albuquerque) Complexo da Chapadão",
    "Parque Tiradentes (Guadalupe) Complexo da Chapadão",
    "Himalaia (Anchieta) Complexo da Chapadão",
    "Papavento (Anchieta) Complexo da Chapadão",
    "Torre (Guadalupe) Complexo da Chapadão",
    "Morro do Miguel (Guadalupe) Complexo da Chapadão",
    "Manhama (Guadalupe) Complexo da Chapadão",
    "Final Feliz (Pavuna, Costa Barros e Acari) Complexo da Chapadão e Complexo da Pedreira",
    "Morro do Chapadão (Costa Barros, Anchieta, Guadalupe, Pavuna, Ricardo de Albuquerque) Complexo da Chapadão",
    "Javali (Anchieta) Complexo da Chapadão",

    // Pedreira

    "Morro da Pedreira (Costa Barros) Complexo da Pedreira",
    "Morro da Lagartixa (Costa Barros) Complexo da Pedreira",
    "Morro da Quitanda (Costa Barros) Complexo da Pedreira",
    "Fazenda Botafogo (Coelho Neto) Complexo da Pedreira",
    "Mata Quatro (Guadalupe) Complexo da Pedreira",
    "Favela Final Feliz (Pavuna, Costa Barros e Acari) Complexo da Chapadão e Complexo da Pedreira",
    "Conjunto Tom Jobim (Guadalupe) Complexo da Pedreira",
    "Morro do Chaves (Barros Filho) Complexo da Pedreira",
    "Favela da Joana d'Arc (Barros Filho) Complexo da Pedreira",
    "Terra Nostra (Costa Barros) Complexo da Pedreira",
    "Eternit (Barros Filho) Complexo da Pedreira",
    "Iraque (Costa Barros) Complexo da Pedreira",

    //Complexo do Lins

    "Morro Árvore Seca (Lins De Vasconcelos) Complexo do Lins",
    "Morro do Encontro (Lins De Vasconcelos) Complexo do Lins",
    "Morro do Amor (Lins De Vasconcelos) Complexo do Lins",
    "Morro da Bacia (Lins De Vasconcelos) Complexo do Lins",
    "Barro Preto (Lins De Vasconcelos) Complexo do Lins",
    "Barro Vermelho (Lins De Vasconcelos) Complexo do Lins",
    "Morro da Cachoeirinha (Lins De Vasconcelos) Complexo do Lins",
    "Morro da Cachoeira Grande (Lins De Vasconcelos) Complexo do Lins",
    "Morro do Gambá (Lins De Vasconcelos) Complexo do Lins",
    "Morro da Cotia (Lins De Vasconcelos) Complexo do Lins",
    "Morro da Boca do Mato (Lins de Vasconcelos e Engenho Novo) Complexo do Lins",

    //Jacarezinho

    "Jacarezinho (Jacarezinho) Jacarezinho",

    // Complexo de Favelas do Acari

    "Vila Esperança (Acari) Complexo de Favelas do Acari",
    "Parque Coroado (Acari) Complexo de Favelas do Acari",
    "Parque Acari (Acari) Complexo de Favelas do Acari",
    "Favela da Beira Rio (Acari) Complexo de Favelas do Acari",
    "Favela de Acari (Acari) Complexo de Favelas do Acari",
    "Favela da Parmalat (Acari) Complexo de Favelas do Acari",
    "Vilá Nazaré (Acari) Complexo de Favelas do Acari",
    "Favela do Amarelinho (Irajá) Complexo de Favelas do Acari",

    //Complexo de Favelas da Mangueira

    //(Mangueira) Complexo de Favelas da Mangueira
    "Vila da Paz (Mangueira) Complexo de Favelas da Mangueira",
    "Buraco Quente (Mangueira) Complexo de Favelas da Mangueira",
    "Olaria (Mangueira) Complexo de Favelas da Mangueira",
    "Chalé (Mangueira) Complexo de Favelas da Mangueira",
    "Vila Miséria (Mangueira) Complexo de Favelas da Mangueira",

    //Manguinhos
    "Carlos Chagas (Manguinhos) Manguinhos",
    "Chip (Manguinhos) Manguinhos",
    "Cobal (Manguinhos) Manguinhos",
    "Mandela (Manguinhos) Manguinhos",
    "Manguinhos (Manguinhos) Manguinhos",
    "Parque João Goulart (Manguinhos) Manguinhos",
    "Parque Oswaldo Cruz (Manguinhos) Manguinhos",
    "São Daniel (Manguinhos) Manguinhos",
    "Varginha (Manguinhos) Manguinhos",

    "Favela da Águia de Ouro (Inhaúma)",
    "Morro do Andaraí (Andaraí)",
    "Bairro 13 (Costa Barros - Complexo da Pedreira)",
    "Morro do Bacalhau (Cascadura)",
    "Bacia de Anchieta (Anchieta e Ricardo de Albuquerque)",
    "Morro da Bacia (Anchieta)",
    "Baixa do Sapateiro (Complexo da Maré)",
    "Morro Baleares (Cavalcante)",
    "Morro do Bananal (Tijuca)",
    "Favela Bandeira II (Del Castilho)",
    "Morro da Barão (Lins de Vasconcelos)",
    "Morro do Barbante (Ilha do Governador)",
    "Morro da Barreira do Lins (Lins de Vasconcelos)",
    "Favela Barreira do Vasco (Vasco da Gama)",
    "Morro da Barreira (Rocha Miranda)",
    "Favela Batutas (Cordovil)",
    "Favela Beco da Esperança (Engenho de Dentro)",
    "Favela do Beco do Vitorino (Água Santa e Encantado)",
    "Favela Beira Rio (Pavuna)",
    "Beira-Rio (Anchieta)",
    "Morro da Bela Vista da Pichuna (Ilha do Governador)",
    "Favela do Belém-Belém (Engenho de Dentro)",
    "Favela do Bereti (Anchieta)",
    "Favela do Bernardino (Turiaçu)",
    "Favela do Bernardo (Encantado)",
    "Morro da Boa Esperança (Campinho)",
    "Favela do Bom Jardim de Cordovil (Cordovil)",
    "Morro da Borda do Mato (Grajaú)",
    "Morro do Borel (Tijuca)",
    "Morro do Budapeste (Ilha do Governador)",
    "Morro do Boogie Woogie (Ilha do Governador)",
    "Morro do Coqueiro (Ilha do Governador)",

    "Caixa d'Água (Quintino e Piedade)",
    "Morro da Caixa D'água (Penha e Brás de Pina)",
    "Favela da Caxangá (Encantado)",
    "Morro do Cajueiro (Madureira, Turiaçu e Vaz Lobo)",
    "Morro da Camarista Méier (Engenho de Dentro)",
    "Favela da Cafua (Coelho Neto)",
    "Favela do Cambuci (Cordovil)",
    "Favela do Caminho da Reta (Honório Gurgel)",
    "Capim (Parque Anchieta)",
    "Caracol (Penha)",
    "Caramuru (Tomás Coelho)",
    "Cardoso de Mesquita (Água Santa e Encantado)",
    "Carrapato (Parque Anchieta)",
    "Cariri (Olaria)",
    "Carlos Drumond de Andrade (Jacaré)",
    "Carroças (Inhaúma)",
    "Casa Branca (Tijuca)",
    "Catrambi (Tijuca)",
    "Céu Azul (Engenho Novo)",
    "Cinco Bocas (Brás de Pina)",
    "Chapadão (Complexo do Chapadão )",
    "Chácara (Turiaçu)",
    "Chácara Del Castilho (Del Castilho e Maria da Graça)",
    "Chácara (Tijuca)",
    "Chacrinha (Tijuca)",
    "Chatuba (Penha)",
    "Chatuba (Caju)",
    "Chaves (Barros Filho - Complexo da Pedreira)",
    "Chega Mais (Cordovil)",
    "Conjunto Dos Ferroviários (Pilares, Abolição e Engenho de Dentro)",
    "Comendador Pinto (Madureira)",
    "Cônego (Honório Gurgel)",
    "Congonhas (Turiaçu)",
    "Coroa (Catumbi)",
    "Coroa (Pilares)",
    "Cova da Onça (Costa Barros)",

    "Cristo Redentor (Anchieta)",
    "Cruz (Andaraí)",
    "CCPL (Benfica)",
    "Dendê (Ilha do Governador)",
    "Dezoito (Água Santa)",
    "Disneylândia (Brás de Pina e Cordovil)",
    "Dique (Vigário Geral)",
    "Divineia (Cordovil)",
    "Divineia (Cordovil)",
    "Divineia (Andaraí)",
    "Dona Francisca (Lins de Vasconcelos)",
    "Dona Zélia (Engenheiro Leal)",
    "Dois de Maio (Sampaio, Riachuelo e Engenho Novo)",
    "Dourado (Cordovil)",
    "Duzentos (Ilha do Governador)",
    "Encanamento (Guadalupe)",
    "Encontro (Lins de Vasconcelos)",
    "Engenheiro Alfredo Gonçalves (Piedade)",
    "Engenheiro Clóvis Daudt (Água Santa)",
    "Engenho (Inhaúma e Engenho da Rainha)",
    "Erédia de Sá (Benfica)",
    "Estrada do Rio do Pau (Anchieta)",
    "Estrada do Tijuaçu (Alto da Boa Vista)",
    "Everest (Inhaúma)",
    "Família (Encantado)",
    "Favela Bairro (Turiaçu)",
    "Fazendinha (Água Santa)",
    "Fazenda (Vaz Lobo)",
    "Faz quem quer (Rocha Miranda)",
    "Fé (Vila da Penha)",
    "Fé em Deus (Parque Anchieta)",
    "Fernão Cardim (Engenho de Dentro e Pilares)",
    "Ferreira de Araújo (Benfica)",
    "Ficap (Pavuna)",
    "França (Tijuca)",
    "Fogo Cruzado (Bonsucesso)",
    "Formiga (Tijuca)",
    "Frei Gaspar (Penha)",
    "Frei Sampaio (Penha)",
    "Fubá (Cascadura e Campinho)",
    "Furquim Mendes (Vigário Geral)",
    "Guaximim (Coelho Neto)",
    "Galinha (Inhaúma)",
    "Gambá (Lins de Vasconcelos)",
    "Gogo da Ema (Guadalupe)",
    "Gouveia (Paciência)",
    "Granja Paulo de Medeiros (Água Santa)",
    "Grota (Madureira)",
    "Grota Baixa (Maria da Graça)",
    "Grotão (Costa Barros)",
    "Grotão (Penha)",
    "Guaíba (Brás de Pina)",
    "Guaporé (Brás de Pina)",
    "Guarabu (Ilha do Governador)",
    "Guarabu (Anchieta)",
    "Guariúba (Ilha do Governador)",
    "Guarda (Inhaúma)",
    "Helder Vivár (Cascadura)",
    "Iguaçu (Engenheiro Leal e Cavalcante)",
    "Iguaíba (Cascadura)",
    "Ildefonso Falão (Parque Colúmbia)",
    "Inácio Dias (Piedade e Encantado)",
    "INPS (Ilha do Governador)",
    "Indiana (Tijuca)",
    "Itabirito (Piedade)",
    "Itatiba (Anchieta)",
    "Itacuã (Ilha do Governador)",
    "Jabiri (Marechal Hermes)",
    "Jamelão (Andaraí e Grajaú)",
    "Jardim Duas Praias (Ilha do Governador)",
    "Jardim Metrô (Irajá)",
    "Jardim Piedade (Piedade)",
    "Javatá (Anchieta e Guadalupe)",
    "JK (Andaraí)",
    "Joaquim Martins (Piedade e Encantado)",
    "Joaquim Queiroz (Ramos)",
    "João Goulart (Higienópolis)",
    "João Paulo II (Grajaú)",
    "João Teles De Menezes (Ilha Do Governador)",
    "Job (Complexo do Chapadao)",
    "Jorge Turco (Rocha Miranda e Coelho Neto)",
    "Juca (Cascadura)",
    "Juramento (Tomás Coelho e Vicente de Carvalho)",
    "Juramentinho (Vicente de Carvalho)",
    "Jubai (Marechal Hermes)",
    "Jurubeba (Guadalupe)",
    "Kelson's (Penha)",
    "Kinder Ovo (Ramos)",
    "Terry Kholeman (Barros Filho)",
    "Lagartixa (Costa Barros - Complexo da Pedreira)",
    "Laudelino Freira (Penha)",
    "Lemos de Brito (Piedade)",
    "Favela da Linha (Costa Barros - Complexo da Pedreira)",
    "Loteamento Juca Ferreira (Pavuna)",
    "Madagascar (Parque Colúmbia)",
    "Maestro Arturo Toscanini (Ilha Do Governador)",
    "Mafuá (Caju)",
    "Magarça (Guaratiba)",
    "Magno Martins (Ilha do Governador)",
    "Malvinas (Irajá)",
    "Manilha (Caju)",
    "Maranata (Guadalupe)",
    "Marcílio Dias (Penha)",
    "Marechal Jardim (São Cristóvão e Benfica)",
    "Marcos Macedo (Guadalupe)",
    "Maria Angu (Ramos)",
    "Merindiba (Penha)",
    "Mariópolis (Anchieta)",
    "Marianos (Piedade)",
    "Marimbá (Jacaré)",
    "Mata Machado (Alto da Boa Vista)",
    "Matinoré (Jacaré)",
    "Matriz (Engenho Novo)",
    "Meriti (Vista Alegre)",
    "Metro da Mangueira (São Francisco Xavier)",
    "Miguel Dibo (Irajá)",
    "Mineira (Catumbi)",
    "Mineira (Andaraí)",
    "Mineiros (Piedade)",
    "Moisés Santana (Turiaçu)",
    "Monte Carmelo (Bento Ribeiro)",
    "Morro da Mina (Engenho de Dentro)",
    "Morro da Mina (Lins de Vasconcelos)",
    "Morro da Mina (Água Santa)",
    "Morro dos Macacos (Vila Isabel)",
    "Mourão Filho (Ramos)",
    "Mundial (Honório Gurgel)",
    "Nossa Senhora da Apresentação (Irajá)",
    "Nossa Senhora da Conceição (Ramos)",
    "Nossa Senhora da Glória (Vila Valqueire)",
    "Nossa Senhora da Guia (Lins de Vasconcelos)",
    "Nossa Senhora da Penha (Caju)",
    "Nossa Senhora das Graças (Ilha do Governador)",
    "Novo Galo (Caju)",
    "Nova Divineia (Grajaú)",
    "Nova Jerusalém (Barros Filho)",
    "Nova Pavuna (Pavuna)",
    "Nova Maracá (Tomás Coelho)",
    "Oito de Dezembro (Anchieta)",
    "Oliveira Bueno (Anchieta)",
    "Ouro Preto (Quintino)",
    "Ouro Preto (Lins de Vasconcelos)",
    "Padre (Pavuna)",
    "Padre Nóbrega (Quintino)",
    "Palmeiras (Inhaúma)",
    "Palmeirinha (Honório Gurgel)",
    "Pára-Pedro (Irajá e Colégio)",
    "Parque Alegria (Caju)",
    "Parque Araruna (Quintino)",
    "Parque Bela Vista (Honório Gurgel)",
    "Parque Boa Esperança (Caju)",
    "Parque Bom Menino (Irajá)",
    "Parque da Conquista (Caju)",
    "Parque Esperança (Anchieta)",
    "Parque Félix Ferreira (Higienópolis)",
    "Parque Horácio Cardoso Franco (Benfica)",
    "Parque Itambé (Ramos)",
    "Parque Jardim Beira Mar (Parada de Lucas)",
    "Parque Maré (Bonsucesso)",
    "Parque Marlene (Jacaré)",
    "Parque Proletário de Cordovil (Cordovil)",
    "Parque Proletário (Vigário Geral)",
    "Parque Proletário (Engenho da Rainha e Inhaúma)",
    "Parque Proletário dos Bancários (Ilha do Governador)",
    "Parque Proletário Monsenhor Brito (Bonsucesso)",
    "Parque Royal (Ilha do Governador)",
    "Parque São José (Barros Filho)",
    "Parque São Sebastião (Caju)",
    "Parque Silva Vale (Tomás Coelho)",
    "Parque União (Del Castilho)",
    "Parque Unidos (Parque Colúmbia)",
    "Parque Vila Isabel (Vila Isabel)",
    "Parque Vitória (Caju)",
    "Parnaíba (Coelho Neto)",
    "Pau da Bandeira (Vila Isabel)",
    "Pau Ferro (Encantado)",
    "Paz (Penha)",
    "Pé Sujo (Cordovil)",
    "Pedacinho do Céu (Cordovil)",
    "Pedreira (Costa Barros - Complexo da Pedreira)",
    "Pedregulho (Benfica)",
    "Pedrinhas (Anchieta)",
    "Pereira Leitão (Turiaçu)",
    "Pereira Pinto (Engenho da Rainha e Tomás Coelho)",
    "Perereca (Guadalupe)",
    "Periquito (Parque Anchieta)",
    "Piancó (Ramos)",
    "Pica Pau (Taquara)",
    "Pica Pau (Cordovil)",
    "Pica Pau Amarelo (Cachambi)",
    "Pinheiro (Bonsucesso)",
    "Ponte Azul (Nilópolis e Anchieta)",
    "Ponte de Coelho Neto (Coelho Neto)",
    "Praça Granito (Anchieta)",
    "Praça Marimbá (Jacaré)",
    "Praia da Rosa (Ilha Do Governador)",
    "Prefeitura (Ilha Do Governador)",
    "Pretos Forros (Lins de Vasconcelos e Água Santa)",
    "Primavera (Cavalcanti)",
    "Proença Rosa (Barros Filho - Complexo da Pedreira)",
    "Querosene (Ilha Do Governador)",
    "Quieto (Sampaio, Engenho Novo, Riachuelo, Rocha e São Francisco Xavier)",
    "Quiririm (Vila Valqueire)",
    "Quinta (Caju)",
    "Quitanda (Costa Barros - Complexo da Pedreira)",
    "Quintanilha (Freguesia)",
    "Quitungo (Brás de Pina e Cordovil)",
    "Raio do Sol (Guadalupe)",
    "Rato (Inhaúma)",
    "Rato Molhado (Engenho Novo e Jacaré)",
    "Relicário (Inhaúma)",
    "Rio (Inhaúma)",
    "Rio do Ouro (Irajá)",
    "Ródano (Ilha Do Governador)",
    "Rodolfo Chamberland (Jardim América)",
    "Roquete Pinto (Ramos)",
    "Rubens Vaz (Bonsucesso)",
    "Sagrada Família (Tijuca)",
    "Salgueiro (Tijuca)",
    "Salsa e Merengue (Ramos)",
    "São Francisco de Assis (Colégio)",
    "São João (Engenho Novo)",
    "São João (Jacaré)",
    "São Jorge (Engenheiro Leal)",
    "São José (Madureira e Engenheiro Leal)",
    "São Sebastião (Caju)",
    "Sanatório (Madureira e Engenheiro Leal)",
    "Santo Agostinho (Andaraí)",
    "Santos Titara (Todos os Santos)",
    "Santa Rosa (Vila Valqueire)",
    "Santos Rodrigues (Rio Comprido)",
    "Sapê (Madureira e Oswaldo Cruz)",
    "Sapucaia (Ilha do Governador)",
    "Sereno (Vila da Penha)",
    "Serra do Padilha (Água Santa)",
    "Serra Morena (Ilha do Governador)",
    "Serra Pelada (Cordovil)",
    "Serra do Padilha (Água Santa)",
    "Sérgio Silva (Engenho da Rainha)",
    "Serrinha (Madureira)",
    "Seu Pedro (Del Castilho e Inhaúma)",
    "Silva Vale (Cavalcanti)",
    "Sítio da Biquinha (Alto da Boa Vista)",
    "Sossego (Madureira)",
    "Tauta (Jacaré)",
    "Te Contei (Parada de Lucas)",
    "Tenente (Bento Ribeiro)",
    "Tenente Pimentel (Olaria)",
    "Terra Nova (Ricardo de Albuquerque)",
    "Terra Encantada (Pavuna - Ficap)",
    "Tijolinho (Bonsucesso)",
    "Timbau (Bonsucesso)",
    "Tom Jobim (Pavuna e Costa Barros)",
    "Travessa Marques de Oliveira (Ramos)",
    "Travessa Rio Claro (Oswaldo Cruz)",
    "Travessa Bernardo (Encantado e Água Santa)",
    "Turiaçu (Turiaçu)",
    "União (Coelho da Rocha)",
    "União (Pavuna)",
    "União (Coelho Neto)",
    "União (Colégio)",
    "União (Costa Barros)",
    "Urubu (Pilares)",
    "Urubuzinho (Abolição)",
    "Várzea (Água Santa)",
    "Valinhos (Oswaldo Cruz)",
    "Vigário Geral (Vigario Geral)",
    "Vila Arará (Benfica e Manguinhos)",
    "Vila Cabuçu (Lins de Vasconcelos)",
    "Vila Cachoeira (Tijuca)",
    "Vila Campinho (Campinho)",
    "Vila Cascatinha (Penha)",
    "Vila Clemente (Caju)",
    "Vila Darcy Vagas (Ramos)",
    "Vila da Paz (Penha)",
    "Vila Eugênia (Marechal Hermes)",
    "Vila Esperança (Ramos)",
    "Vila Itaocara (Inhaúma)",
    "Vila Jandira (Jacaré)",
    "Vila Joaniza (Ilha Do Governador)",
    "Vila Lusimar (Engenho de Dentro)",
    "Vila Maria (Higienópolis e Maria da Graça)",
    "Vila Matinha (Ramos)",
    "Vila Nossa Senhora da Glória (Marechal Hermes)",
    "Vila Nova (Inhaúma)",
    "Vila Nova da Pavuna (Pavuna)",
    "Vila Nova Esperança (Caju)",
    "Vila Operária Diamantes (Rocha Miranda e Honório Gurgel)",
    "Vila Pequeri (Brás de Pina)",
    "Vila Primavera (Cavalcanti)",
    "Vila Proletária (Penha)",
    "Vila Rica (Irajá)",
    "Vila Santo Antônio (Ramos)",
    "Vila São Jorge (Colégio)",
    "Vila São Pedro (Bonsucesso)",
    "Vila Triagem (São Francisco Xavier)",
    "Vila Turismo (Higienópolis e Manguinhos)",
  ],
};

const allSul = {
  complex: "",
  zone: "sul",
  data: [
    "Rocinha (Rocinha) Rocinha",
    "Morro da Babilônia (Leme)",
    "Morro dos Cabritos (Copacabana)",
    "Cantagalo-Pavão-Pavãozinho (Ipanema e Copacabana)",
    "Chácara do Céu (Vidigal)",
    "Chapéu Mangueira (Leme)",
    "Coroados (Laranjeiras)",
    "Cruzada (Leblon)",
    "Dois Irmãos (Vidigal)",
    "Grotão (Horto)",
    "Guararapes (Cosme Velho)",
    "Guardião (Copacabana)",
    "Horto (Jardim Botânico)",
    "Imaculada Conceição (Cosme Velho)",
    "Ladeira dos Tabajaras (Copacabana)",
    "Maloca (Laranjeiras)",
    "Mangueira (Botafogo)",
    "Pavão-Pavãozinho (Copacabana)",
    "Pereirão (Laranjeiras)",
    "Recanto Familiar (Humaitá)",
    "Santa Marta (Botafogo)",
    "Santo Amaro (Catete)",
    "Tavares Bastos (Catete)",
    "Vila Cândido (Cosme Velho)",
    "Vila Parque da Cidade (Gávea)",
  ],
};

const allCentral = {
  complex: "",
  zone: "sul",
  data: [
    "Morro do Bispo (Rio Comprido)",
    "Clara Nunes (Rio Comprido)",
    "Fogueteiro (Rio Comprido)",
    "José de Anchieta (Rio Comprido)",
    "Liberdade (Rio Comprido)",
    "Matinha (Rio Comprido)",
    "Pantanal (Rio Comprido)",
    "Parque Rebouças (Rio Comprido)",
    "Paula Ramos (Rio Comprido)",
    "Paulo Matos (Rio Comprido)",
    "Querosene (Estácio e Rio Comprido)",
    "Rodo (Rio Comprido)",
    "Santa Alexandrina (Rio Comprido)",
    "Santos Rodrigues (Rio Comprido)",
    "Sumaré (Rio Comprido e Estácio)",
    "Turano (Rio Comprido)",
    "Unidos de Santa Teresa (Santa Teresa e Rio Comprido)",
    "Vila Anchieta (Rio Comprido)",
    "Rato (Estácio)",
    "São Carlos (Estácio)",
    "Livramento (Gamboa)",
    "Providência (Gamboa e Santo Cristo)",
    "Telégrafos (São Cristóvão)",
    "Tuiuti (São Cristóvão)",
    "Mineiros (São Cristóvão)",
    "Mirante do Tuita (São Cristovão)",
    "Parque Candelária (São Cristóvão)",
    "Escondidinho (Santa Teresa)",
    "Fallet (Santa Teresa)",
    "Francisco de Castro (Santa Teresa)",
    "Julio Otoni (Santa Teresa)",
    "Ladeira de Santa Isabel (Santa Teresa)",
    "Luíz Marcelino (Santa Teresa)",
    "Miguel Austragelésio (Santa Teresa)",
    "Parque Catete (Santa Teresa)",
    "Prazeres (Santa Teresa)",
    "Travessa Vista Alegre (Santa Teresa)",
    "Vila Paraíso (Santa Teresa)",
  ],
};

function writeJson(areas) {
  const final = [];
  let id = 1;

  for (let area of areas) {
    for (let favela of area.data) {
      const [name, neighborhoods, complex] = favela.split(/[()]+/);

      final.push({
        id,
        complex: complex.trim(),
        neighborhoods,
        zone: area.zone,
        name: name.trim(),
      });

      id++;
    }
  }

  const serialized = JSON.stringify(final);

  writeFileSync("rj.json", serialized);
}

writeJson([allCentral, allSul, allNorte, allOeste]);
