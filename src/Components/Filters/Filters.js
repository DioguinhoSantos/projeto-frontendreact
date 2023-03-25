import { FilterContainer, Filtros, Labels, Titulo } from "./filtersStyle";

export const Filters = ({
  minFilter,
  OCMinFilter,
  maxFilter,
  OCMaxFilter,
  searchFilter,
  OCSearchFilter,
}) => {
  return (
    <FilterContainer>
      <Titulo>Filtros</Titulo>

      <Labels htmlFor="filtro">Valor mínimo:</Labels>
      <Filtros
        name="filtro"
        id="filtro"
        placeholder="Ex.: 200"
        type="number"
        min="0"
        onChange={OCMinFilter}
        value={minFilter}
      />
      <br />

      <Labels htmlFor="filtro">Valor máximo:</Labels>
      <Filtros
        name="filtro"
        id="filtro"
        placeholder="Ex.: 200"
        type="number"
        min="0"
        onChange={OCMaxFilter}
        value={maxFilter}
      />
      <br />

      <Labels htmlFor="nome">Busca por nome:</Labels>
      <Filtros
        name="nome"
        id="nome"
        placeholder="Ex.: Cleiton"
        type="text"
        onChange={OCSearchFilter}
        value={searchFilter}
      />

      <br />
    </FilterContainer>
  );
};

export default Filters;
