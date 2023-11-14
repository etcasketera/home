
def bubble_sort(array) 
    swapped = true
    until swapped == false
        swapped = false
        for i in 1..array.length() -1  do
            if array[i-1] > array[i]
                swapped = true
                temp = array[i-1]
                array[i-1] = array[i]
                array[i] = temp
            end
        end
    end
    array
end
p (bubble_sort([1, 2, 3, 4, 5, 4, 5, 6, 3, 2, 9]))