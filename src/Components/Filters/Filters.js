import { FilterContainer } from "./filtersStyle";

export const Filters = ({minFilter, OCMinFilter, maxFilter, OCMaxFilter, searchFilter, OCSearchFilter}) => {
    return (
        <FilterContainer minFilter={minFilter}>
            <p>Filters</p>

            <label htmlFor="filtro">
                Valor mínimo:
            </label>
                <input name="filtro" id="filtro" placeholder="Ex.: 200" onChange={OCMinFilter} value={minFilter}/>
            <br />

            <label htmlFor="filtro">
                Valor máximo:
            </label>
                <input name="filtro" id="filtro" placeholder="Ex.: 200" onChange={OCMaxFilter} value={maxFilter}/>
            <br />

            <label htmlFor="nome">
                Busca por nome:
            </label>
                <input name="nome" id="nome" placeholder="Ex.: Cleiton" onChange={OCSearchFilter} value={searchFilter}/>
            <br />

        </FilterContainer>
    );
}

export default Filters;