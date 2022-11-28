/* Overview
In this kata, n grains of rice will be initially placed at n distinct squares on a 2-dimensional rectangular board.

For example, if a particular grain starts on the board square at x=3 and y=8 it will be given starting "integer coordinates" (3,8).

To keep things simple, all grains will always have coordinates x>0 and y>0.

From the starting configuration of n grains in n distinct locations, your goal is to move the n grains individually so that they all end up together on a same, shared, "finishing square".

You must move each grain individually and you can only move each grain 1 square at a time horizontally or vertically, but not diagonally.

Now, depending on the finishing square you choose, consider the total number of moves, Mtotal, you take to move all n grains to that particular finishing square:

M_total(chosen finishing square) =

moves taken by grain 1 from its initial position to the finishing square +
moves taken by grain 2 from its initial position to the finishing square +
... + 
moves taken by grain n from its initial position to the finishing square
Depending on which square of the board you choose to move all the n grains to, you will require a different total number of moves, Mtotal .

Which square(s) on the board requires the minimum total number of moves to move all n grains to it?

Inputs
You will be given an n-element set of 2-tuples, representing the starting integer coordinates of each of the n grains on the board.
Each 2-tuple will be of the form (x,y) with x and y both integers and both > 0.
There will be no repeated 2-tuples, corresponding to the fact that all n grains start at n distinct locations.
The input provided to you will always be non-empty, i.e. will always contain at least 1 tuple. Your solution should be able to handle the case of n=1 grains however.
Performance requirements: Values up to n = 200,000 grains on a single board will be tested.

Output
You must return an array of 2-tuples representing all the possible finishing squares that can be reached in the minimum total number of moves for the n grains. You can return the array in any order you like.
(Note that in some cases there may be more than one square in the board that corresponds to the minimum total number of moves, and you must find all of them for your solution to be valid). */