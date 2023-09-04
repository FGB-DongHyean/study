import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchForm({initialValue}) {
    const router = useRouter();
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // 검색어 x -> 홈페이지 이동
        if(!value){
            router.push('/');
            return;
        }

        router.push(`/search?q=${value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
        <input name="q" value={value} onChange={handleChange} />
        <button>검색</button>
        </form>
    );
}