# Challenge Specification
A Challenge is a set of properties defining how the game will play out the challenge.

### Hierarchy system
There is a hierarchy made of 3 levels of property specification:
- Level 1: Global defaults
- Level 2: Challenge specific
- Level 3: Pattern specific

Only certain properties can reach level 3, e.g. the time allowed to finish a single pattern.


## List of properties

### Level 2 properties

#### Total time limit
Global default: -1
Property level: 2

The total time limit defines the maximum time the player has to finish the entire set of patterns.

#### Total move limit
Global default: -1
Property level: 2

The total move limit defines the maximum number of moves the player can make to finish the entire set of patterns.

#### Pattern list
Types: `PatternSpecification[]` | `{ initial: id, function: (pattern: Layout) => Layout }`
Global default: error (must be defined)
Property level: 2

The pattern list defines the list of patterns that will be played. The pattern list can be defined in two ways:
- As an array of pattern specifications containing the pattern ID and optional level 3 properties
- As an object containing the initial pattern ID and a function that will be called with the previous pattern as an argument and that will return the next pattern.

#### Number of patterns
Global default: -1
Property level: 2

The number of patterns defines the number of patterns that will be played. If the pattern list order is linear, this property should be equal to the length of the pattern list. If not, this property should be equal to the number of patterns that will be played before the player wins the challenge.

#### Pattern list order
Values: `linear` | `random`
Global default: random
Property level: 2

The pattern list order defines how patterns are chosen from the pattern list. If the value is `linear`, the patterns will be played in the order they are defined in the pattern list. If the value is `random`, the patterns will be played in a random order, until the number of pattern property is reached.

### Level 3 properties

#### Pattern ID
Global default: error (must be defined)
Property level: 3

The pattern ID defines which pattern will be played.

#### Time limit per pattern
Global default: -1
Property level: 3

The time limit per pattern defines the maximum time the player has to finish a single pattern

#### Move limit per pattern
Global default: -1
Property level: 3

The move limit per pattern defines the maximum number of moves the player can make to finish a single pattern.


#### Bonus time per pattern completion
Global default: 0
Property level: 3

The bonus time per pattern completion defines the amount of time the player will gain for finishing a single pattern.

#### Modulo
Global default: 2
Property level: 3

The modulo defines which modulo will be used when playing a specific pattern.

#### Difficulty
Types: `number` | `range`
Global default: 2
Property level: 3

The difficulty defines the theorical number of moves required to finish a specific pattern. If it is a `range`, the sum of all ranges inside the pattern list must add up to the total 