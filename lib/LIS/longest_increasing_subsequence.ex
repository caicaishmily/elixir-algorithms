defmodule LongestIncreasingSubsequence do
  def lis(list) do
    case is_list(list) do
      true ->
        calculate_longest_increasing_subsequence(list)
      false ->
        "wrong params"
    end
  end

  defp calculate_longest_increasing_subsequence(list) do
    (for dp_list <- combos(list), dp_list == Enum.sort(dp_list), do: dp_list)
    |> Enum.max_by(fn dp_list -> length(dp_list) end)
    |> length
  end

  defp combos(list) do
    Enum.reduce(1..length(list), [[]], fn k, acc -> acc ++ (combos(k, list)) end)
  end

  defp combos(1, list), do: (for l <- list, do: [l])

  defp combos(k, list) when k == length(list), do: [list]

  defp combos(k, [h|t]) do
    (for sub_list <- combos(k - 1, t), do: [h | sub_list]) ++ combos(k, t)
  end
end
