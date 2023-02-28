import { FilterContainer } from "./filtersStyle";

export const Filters = ({minFilter, OCMinFilter, maxFilter, OCMaxFilter, searchFilter, OCSearchFilter}) => {
    return (
        <FilterContainer>
            <p>Filters</p>

            <label htmlFor="filtro">
                Valor mínimo:
            </label>
                <input 
                name="filtro" 
                id="filtro" placeholder="Ex.: 200"
                type='number'
                min='0'
                onChange={OCMinFilter} value={minFilter}/>
            <br />

            <label htmlFor="filtro">
                Valor máximo:
            </label>
                <input 
                name="filtro" 
                id="filtro" placeholder="Ex.: 200"
                type='number'
                min='0'
                onChange={OCMaxFilter} value={maxFilter}/>
            <br />

            <label htmlFor="nome">
                Busca por nome:
            </label>
                <input 
                name="nome" 
                id="nome" 
                placeholder="Ex.: Cleiton"
                type='text'
                onChange={OCSearchFilter} value={searchFilter}/>
            <br />

        </FilterContainer>
    );
}

export default Filters;