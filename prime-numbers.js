/* A Deletable Prime is a prime number from which you can remove digits one at a time, and each iteration of this removal gives you another prime.
 
Let's look at an example of a deletable prime: 
410256793 
41256793 
4125673 
415673 
45673 
4567 
467 
67 
7 
All of the numbers above are prime, and deletable (by definition). 

It is worth noting that numbers such as: 
10859 
859 
59 
5 
Are not Deletable Primes, because the removal of digit 1 implied the removal of digit 0 (10859 => 859), and thus it is not a valid sequence. 
Your objective is to find all of the Deletable Primes in range [0, 10000000], and output the number of Deletable Primes in that range, as well as their sum.

Input:
None.
 
Output:
Two lines. At the end of every line there must be a line break (\n).
The first line is the number of Deletable Primes existing in the interval [0, 10000000]. 
The second line is the sum of all of those Deletable Primes. 

Example Output (range [0, 10000]): 
699
3168960 */

