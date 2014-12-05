start
  = docTitle "\n" node+

docTitle
  = doc:('desktop') " " title:title { return {
    doctype: doc,
    title: title
    }
  }

title
  = t:[a-z]i+ { return t.join("") }


node
  = indent:indent keyword:keyword " " "[" attributes:attributes+ "]" delimiter internalNode:internalNode* { return {
    keyword: keyword,
    attributes: attributes,
    children: internalNode
    }
  }

indent
  = '  '

keyword
  = "navbar"
  / "button"


attr
  = "size"
  / "offset"

digit
  = [0-9a-z]i

delimiter
  = !.
  / "\n"

attributes
  = a:attr ":" v:digit+ " "* { return {
      attr: a,
      value: parseInt(v.join(""),10)
    }
  }

internalNode
  = indent node
