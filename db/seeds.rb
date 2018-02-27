1.upto(10) do |i|
  Event.create(name: "Event #{i}",
  description: "Its sample event with number #{i}",
  event_date: Date.today + rand(3).months,
  place: "Random place number #{i}")
end