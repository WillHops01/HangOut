@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :long, :lat
  end
end

# @benches.each do |bench|
#   json.set! bench.id do
#     json.partial! 'bench', bench: bench
#     json.reviewIds []
#   end
# end