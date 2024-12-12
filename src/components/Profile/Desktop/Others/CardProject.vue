<script setup>
const title = "Descubra o Sabor da Nossa Cozinha";
const Data = "JUNE 25 / 1 AGOS";
const Categoria = "CULINÁRIA";
const vagas = "4/3";
const salario = "1.000";
const description =
  "Você é apaixonado por gastronomia e tem habilidades que podem brilhar na nossa cozinha? O Taberna do Chef, conhecido por seus pratos deliciosos e ambiente acolhedor, está em busca de freelancers talentosos para se juntar à nossa equipe!";
</script>

<template>
  <div class="card">
    <div class="box-image">
      <img src="https://via.placeholder.com/150" alt="Imagem da vaga" />
    </div>
    <div class="box-information">
      <div class="header">
        <h2 class="title">{{ title }}</h2>
        <div class="wrap">
        <p class="details">{{ Data }} | {{ Categoria }}</p>
        <p class="details">
          Vagas: {{ vagas }} | Salário: R${{ salario }}
        </p>
        </div>
      </div>
      <div class="description">
        <p>{{ description }}</p>
        <div class="wrap-button">
        <button class="delete-button">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 25px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 1200px;
}
.box-image{
 padding-right: 2em;

}
.box-image img {
  width: 250px;
  height: 210px;
  border-radius: 8px;
  object-fit: cover;
}
.image-box:hover {
  background-color: #f9f9f9;
}

.file-input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.box-information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.wrap{
    display: flex;
    gap: 10px;
}
.header .title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
}

.header .details {
  font-size: 12px;
  color: #777;
  margin-bottom: 8px;
}

.vagas-salario {
  font-size: 12px;
  color: #444;
  margin-bottom: 12px;
}

.description p {
  font-size: 16px;
  color: #555;
  margin-bottom: 12px;
}

.delete-button {
  background-color: white;
  color: #00546B;
  padding: 8px 12px;
  border: 1px solid #a3a2a2;
  cursor: pointer;
  font-size: 14px;
  width: 150px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}
.delete-button:hover {
  background-color: #00546B;
  color: white;
  border-color: #00546B;
}

</style>
