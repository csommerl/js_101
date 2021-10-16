# PEDAC
1. Understand the **Problem**
  1. identify expected inputs & outputs
  2. clarify key terms
  3. identify implicit requirements/rules
  4. mental model of the problem (optional)
2. Write **Examples**/Test Cases
  1. validate understanding of the problem
  2. figure out edge cases
3. **Data Structure**
  - how will the data be represented in converting input to output?
4. **Algorithm**
  - what steps are needed to convert input to output?
  - given the data structures (input, output, conversion), are there special methods for these steps? For example, help to avoid conditions & loops?
5. **Code**
  - implement the algorithm

# Steps to Debugging
1. Reproduce the Error
2. Determine the Boundaries of the Error
3. Trace the Code
4. Understand the Problem Well
5. Implement a Fix
  - Fix one problem at a time
  - Merely make a note of other problems
6. Test the Fix

# Techniques for Debugging
1. Line by line
2. Rubber Duck
3. Walking Away
4. Inspecting with a Debugger
5. Advanced Debugging

# Try/Catch
Only use try/catch/finally blocks when the following conditions are both true:
  1. A built-in JavaScript function or method can throw an exception and you need to handle or prevent that exception.
  2. A simple guard clause is impossible or impractical to prevent the exception.