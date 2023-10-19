dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings (string, dict)
    word_array = string.downcase.split(" ")
    puts word_array
    new_hash = Hash.new(0)
    word_array.each do |str|
        puts str
        dict.each do |comp|
            puts comp
            if str.include?(comp)
                new_hash[comp] += 1
            end
        end
    end
    return new_hash
end

puts substrings("Howdy partner, sit down! How's it going?", dictionary)