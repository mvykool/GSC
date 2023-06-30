import { useState, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { CgSearch, CgClose } from 'react-icons/cg';
import './Search.css';

const Search = () => {

    const location = useLocation();
    const isResultsPage = location.pathname === '/results';
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const { search } = useContext(SearchContext);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value);
    };

    const handleInputClean = () => {
        setInputValue('');
        setSearchTerm('');
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/results');
        search(searchTerm);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>

                <div className={isResultsPage ? 'search-result' : 'search-home'}>

                    <CgSearch onClick={handleSubmit} className={isResultsPage ? "icon-result" : "icon-home"} />

                    {isResultsPage && inputValue ? (
                        <CgClose onClick={handleInputClean} className="icon-close-right" />
                    ) : null}

                    <input type="search" value={inputValue} onChange={handleInputChange} />

                    {!isResultsPage && inputValue ? (
                        <CgClose onClick={handleInputClean} className="icon-close" />
                    ) : null}

                </div>

                {isResultsPage ? null : (
                    <button type='submit' className="search-btn">
                        Buscar
                    </button>
                )}

            </form>
        </div>
    );
};

export default Search;