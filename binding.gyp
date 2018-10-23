{
  "targets": [
    {
      "target_name": "hello",
      "sources": [ "./c/add.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}