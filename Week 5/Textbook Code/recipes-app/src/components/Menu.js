// ./src/components/Menu.js

import React from 'react';
import Recipe from './Recipe';

function Menu({ recipes }) {
    return (
        <article>
            <header>
                <h1>Delicious Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipie, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}

export default Menu;