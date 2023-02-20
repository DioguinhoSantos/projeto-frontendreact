import { FilterContainer } from "./FiltersStyle";

export const Filters = () => {
    return (
        <FilterContainer>
            <p>Filters</p>

            <label htmlFor="filtro">
                Valor mínimo:
            </label>
                <input name="filtro" id="filtro" placeholder="Ex.: 200" />
            <br />

            <label htmlFor="filtro">
                Valor máximo:
            </label>
                <input name="filtro" id="filtro" placeholder="Ex.: 200" />
            <br />

            <label htmlFor="nome">
                Busca por nome:
            </label>
                <input name="nome" id="nome" placeholder="Ex.: Cleiton" />
        </FilterContainer>
    );
}

export default Filters;