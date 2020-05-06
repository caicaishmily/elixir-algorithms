defmodule Stack2Queue do

  def new(list) when is_list(list) do
    list
  end

  def new(_list), do: "wrong params"

  def dequeue(queue, item) do
    List.insert_at(queue, -1, item)
  end

  def enqueue() do

  end

  def peek([]), do: nil
  def peek(queue) do

  end

  def count([]), do: 0
  def count(queue) do
    queue
    |> Enum.count
  end

  def empty?(queue) do
    case Enum.count(queue) do
      0 -> true
      _ -> false
    end
  end
end
