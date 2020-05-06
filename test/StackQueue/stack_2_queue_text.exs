defmodule Stack2QueueTest do
  use ExUnit.Case
  alias Stack2Queue

  test "new" do
    assert Stack2Queue.new([1, 4, 3, 4, 2]) == [1, 4, 3, 4, 2]
    assert Stack2Queue.new(:test) == "wrong params"
  end

  test "happy path" do
    # assert Stack2Queue.lis([1, 4, 3, 4, 2]) == 3
  end

  test "dequeue" do
    # queue = Stack2Queue.new([1, 4, 3, 4, 2])
    # assert Stack2Queue.dequeue(queue) == [4, 3, 4, 2, 2]
  end

  test "enqueue" do
    # queue = Stack2Queue.new([1, 4, 3, 4, 2])
    # assert Stack2Queue.enqueue(queue, 2) == [1, 4, 3, 4, 2, 2]
  end

  test "empty" do
    assert Stack2Queue.empty?([]) == true
    assert Stack2Queue.empty?([1, 2]) == false
  end
end
