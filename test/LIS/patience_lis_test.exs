defmodule PatienceLongestIncreasingSubsequenceTest do
  use ExUnit.Case
  alias PatienceLongestIncreasingSubsequence

  test "happy path" do
    assert PatienceLongestIncreasingSubsequence.lis([1, 4, 3, 4, 2]) == 3
    assert PatienceLongestIncreasingSubsequence.lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
  end

  test "wrong params" do
    assert PatienceLongestIncreasingSubsequence.lis(:test) == "wrong params"
  end
end
