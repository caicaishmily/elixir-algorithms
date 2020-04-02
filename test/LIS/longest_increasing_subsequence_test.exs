defmodule LongestIncreasingSubsequenceTest do
  use ExUnit.Case
  alias LongestIncreasingSubsequence

  test "happy path" do
    assert LongestIncreasingSubsequence.lis([1, 4, 3, 4, 2]) == 3
    assert LongestIncreasingSubsequence.lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
  end

  test "wrong params" do
    assert LongestIncreasingSubsequence.lis(:test) == "wrong params"
  end
end
