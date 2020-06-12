import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lampâda Queimada', image: 'lampada.svg'},
        { title: 'Projetor Defeituoso', image: 'projetor.svg'},
        { title: 'Ar-condicionado Defeituoso', image: 'arcondicionado.svg'},
        { title: 'Banheiro', image: 'banheiro.svg'},
        { title: 'Bebedouro com Problema', image: 'bebedouro.svg'},
        { title: 'Sem Energia', image: 'energia.svg'},
    ]);
}