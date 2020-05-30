defmodule SortTest do
  use ExUnit.Case

  test "quick sort" do
    assert QuickSort.sort(123) == :error
    assert QuickSort.sort([]) == []
    assert QuickSort.sort([85, 24, 63, 45, 17, 31, 96, 50]) == [17, 24, 31, 45, 50, 63, 85, 96]
  end

  test "select sort" do
    assert SelectSort.sort(123) == :error
    assert SelectSort.sort([]) == []
    assert SelectSort.sort([85, 24, 63, 45, 17, 31, 96, 50]) == [17, 24, 31, 45, 50, 63, 85, 96]
  end
end
