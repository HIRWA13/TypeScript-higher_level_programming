/**
 * DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.
 */

/** given these inputs, capitalize each word with length greater than 2
 * "apple"            => "Apple"
   "apple of banana"  => "Apple of Banana"
   "one   space"      => "One   Space"
   "   space WALK   " => "   Space Walk   " 
 */

// approach:
// - first split the string
// after we will check if each word has a length greater than 2 
// after we will perform capitalization by taking the element at first index of each word and then capitalize it and consider white spaces to0
