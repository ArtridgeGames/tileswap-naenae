Score is obtained when 
- solving a position in freeplay
- finishing a puzzle
- finishing a challenge

# Freeplay
When solving a position in freeplay the following formula is applied to find out how much score is to be awarded:
score = difficulty * (1.1 + difficulty / (max difficulty * 0.8 + 10))

$$ score = D \cdot({1.1 + {D \over {D_{max} \cdot 0.8 + 10}}}) * (\frac{1}{2})^{nHints} $$

where: 
- difficulty is the least number of moves required to solve the position
- max difficulty is the theoretical maximum number of moves that the layout can take to solve, it can be approximated with the number of tiles the the layout has
- nHints is the number of hints that the player had to ask for to find the solution

# Puzzles
Each puzzle has a total amount of score to award. 1/6 of the score is given when the player solves the puzzle with the bronze medal, 2/6 when solved with a bronze medal and 3/6 when solved with a gold medal. The score for each medal can only be awarded once; if the player finished the puzzle with a bronze medal and solves it again with a bronze medal, no score is awarded. If the player finishes witha better medal, the score for all the medals below it is awarded if he didn't already have it: finishing with a silver medal awards 1/6 + 2/6 of the total score.
An automatic formula that could be used to determine the total score for a puzzle could be score = number of moves for the solution * 10


# Challenges
Finishing a challenge awards 2 different sources of score:
- the first time bonus
- the challenge difficulty

The first time bonus is simply a score value that is added the first time the player finishes any challenge (say Think Fast - Hard)
The challenge difficulty is given by the following formula :
score = (sum of individual position scores) * total move difficulty multiplier * total time difficulty multiplier

Where
- individual position score = difficulty * difficulty multiplier * move difficulty * time difficulty

- total move difficulty multiplier is 1 when no total move limit is imposed, else it is >1 proportional to how close it is to the minimum moves required to finish the challenge (met ce que tu comme formula on va devoir la trouver en y jouant j'ai pas encore d'idee sur quoi mettre)
- total time difficulty multiplier is 1 when no total time limit is imposed, else it is >1 proportional to how close it is to the minimum moves required to finish the challenge (pareil)

- difficulty and difficulty multiplier are as described in the freeplay section
- move difficulty and time difficulty are 1 if no limit is imposed on the pattern specifically, else >1 same as for total time and move difficulty

A third source of score may be added to challenges with the "is record broken bonus"

# Categories
As we want the player to focus on newly unlocked categories, every category has a bonus mulitplier that whenever score is obtained, it mutliplies it. (J'ai pas encore decide non plus on doit tester, met 2 * le numero de categorie pour l'instant, ou autre chose si ca te parait mieux en testant)
For example when finishing a freeplay position :
- Example 1
score = 5 (difficulty) * 1.3 (difficulty multiplier) * 1 (category bonus)
- Example 2 
score = 8 (difficulty) * 1.4 (difficulty multiplier) * 4 (category bonus)

