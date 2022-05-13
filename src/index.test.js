var expect = require('chai').expect;
var  starWars = require('./index')

describe('starwars-names',()=>  {
    describe('all',()=> {
        it ('should be an array of string',()=>{

            except(starWars.all).to.satisfy(isArrayOfString);
            function isArrayOfString(array){

                return array.every(function(item){
                    return typeof item === 'string';
                });

            }

        });

        it('should contain like skywalker',()=>{
            expect(starWars.all).to.include('Luke Skywalker');
        })

    });

    describe('random',()=>{
        it('should return random item from the starWars.all ',()=>{
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
    })
   
});