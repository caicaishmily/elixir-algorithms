function removeLinkListDuplicates(head) {
  if(head == null) return null

  let slow = head, fast = head.next

  while(fast != null) {
      if(fast.val != slow.val) {
          slow.next = fast
          slow = slow.next
      }
      fast = fast.next
  }

  slow.next =  null

  return head
}
