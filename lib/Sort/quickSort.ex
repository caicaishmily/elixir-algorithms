defmodule QuickSort do
  def sort(list) when not is_list(list), do: :error
  def sort([]), do: []

  def sort([pivot | rest]) do
    {left, right} = Enum.split_with(rest, &(&1 < pivot))
    sort(left) ++ [pivot] ++ sort(right)
  end
end
