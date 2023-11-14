def stock_picker (prices)
    buy_price = prices[0]
    buy_day = 0
    profit = 0
    result = [0, 0]

    prices.each_with_index do |price, i|
        if price < buy_price
            buy_price = price
            buy_day = i
            next
        end

        if price - buy_price > profit
            proft = price - buy_price
            result = [buy_day, i]
        end
    end
    result
end

p stock_picker([7, 6, 5, 4, 3, 2, 4])
