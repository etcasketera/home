def caesar_cipher (string, shift)
    string_array = string.split("")
    new_array = []
    string_array.each do |letter|
        if letter.ord <= 47 || letter.ord.between?(58, 64) || letter.ord.between?(91,96) || letter.ord.between?(123,126)
            new_array.push(letter)
        else
            new_array.push(shifter(letter, shift).chr)
        end
    end
    return new_array.join
    
end

def shifter (letter, shifty)
    new_ord = 0
    if letter.ord.between?(65, 90)
        new_ord = letter.ord + shifty
        if (letter.ord + shifty) > 90
            new_ord -= 26
        end
    elsif letter.ord.between?(97, 122)
        new_ord = letter.ord + shifty
        if (letter.ord + shifty) > 122
            new_ord -= 26
        end
    end
    return new_ord        
end

puts caesar_cipher("What a string!", 5)