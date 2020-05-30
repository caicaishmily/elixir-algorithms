defmodule SelectSort do
  def sort([]), do: []
  def sort(list) when is_list(list) do
    select_sort(list, [])
  end

  def sort(_list), do: :error

  defp select_sort([head | []], acc)  do
    acc ++ [head]
  end

  defp select_sort(list, acc)  do
    min = min(list)
    select_sort(:lists.delete(min, list), acc ++ [min])
  end

  defp min([ head | [ first | []]]) do
    smaller(head, first)
  end

  defp min([head | [first | tail]]) do
    min([smaller(head, first) | tail])
  end

  defp smaller(first, second) do
    if first <= second do
      first
    else
      second
    end
  end
end
