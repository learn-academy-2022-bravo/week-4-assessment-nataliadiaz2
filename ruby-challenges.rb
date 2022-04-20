# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def num_determine number
  if number.even?
    "#{number} is even"
  else
    "#{number} is odd"
  end
end

p num_determine num1
p num_determine num2
p num_determine num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def vowel_remover string
  string.delete "aeiouAEIOU"
end

p vowel_remover album1
p vowel_remover album2
p vowel_remover album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def possible_palindrome string
  if string.downcase == string.downcase.reverse
    "#{string} is a palindrome"
  else
    "#{string} is not a palindrome"
  end
end

p possible_palindrome palindrome_tester1
p possible_palindrome palindrome_tester2
p possible_palindrome palindrome_tester3
